const URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`;

const API_TOKEN = process.env.NODE_ENV === 'development' ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN

export async function fetchPage(slug) {

  const QUERY = `
    query {
      pageCollection(where: {
        slug: "${slug}"
      }, limit: 1, preview: ${process.env.NODE_ENV === 'development' ? 'true' : 'false'}) {
        items {
          sys {
            id
          }
          title
          sectionsCollection {
            items {
              __typename
              ...on Hero {
                sys {
                  id
                }
                heading
                body
                button {
                  sys {
                    id
                  }
                  theme
                  label
                  url
                }
              }
              ...on Stats {
                sys {
                  id
                }
                heading
                body
                statsCollection {
                  items {
                    sys {
                      id
                    }
                    label
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: {} })
    })
    const json = await req.json();

    return json?.data?.pageCollection?.items?.[0] || {}
  } catch (error) {
    return []
  }
}

export async function fetchPosts() {

  const QUERY = `
    query {
      postCollection(preview: ${process.env.NODE_ENV === 'development' ? 'true' : 'false'}) {
        items {
          sys {
            id
          }
          title
          slug
          description {
            json
          }
          image {
            url(transform: { format: JPG })
          }
        }
      }
    }
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: {} })
    })
    const json = await req.json();

    return json.data.postCollection.items || []
  } catch (error) {
    return []
  }
}


export async function getPostBySlug(slug) {

  const QUERY = `
    query($slug: String) {
      postCollection(where: {
        slug: $slug
      }, limit: 1) {
        items {
          title
          slug
          description {
            json
          }
        }
      }
    }
  `;

  try {
    const req = await fetch(URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: QUERY, variables: { slug } })
    })
    const json = await req.json();

    const results = json?.data?.postCollection?.items || [];
    return { post: results[0] || {} }
  } catch (error) {
    return { post: {} }
  }
}