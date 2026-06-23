export const personQuery = `*[_type == "person"][0]`
export const servicesQuery = `*[_type == "service"] | order(order asc)`
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc)`
export const podcastEpisodesQuery = `*[_type == "podcastEpisode"] | order(episodeNumber asc)`
export const awardsQuery = `*[_type == "award"] | order(year desc)`
export const experiencesQuery = `*[_type == "experience"] | order(year desc)`
