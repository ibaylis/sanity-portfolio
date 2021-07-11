/* react talking to sanity */
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "1915c7zm",
    dataset: "production"
})