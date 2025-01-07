// Using MyAnimeList's official API
const animeData = {
    baseUrl: 'https://graphql.anilist.co',

    async fetchLatestAnime(page = 1, perPage = 12) {
        const query = `
            query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                    }
                    media(type: ANIME, sort: [TRENDING_DESC, POPULARITY_DESC], status: RELEASING) {
                        id
                        title {
                            romaji
                            english
                            native
                        }
                        coverImage {
                            large
                            medium
                        }
                        bannerImage
                        description
                        episodes
                        duration
                        status
                        season
                        seasonYear
                        format
                        genres
                        averageScore
                        popularity
                        nextAiringEpisode {
                            episode
                            timeUntilAiring
                        }
                    }
                }
            }
        `;

        return this.makeRequest(query, { page, perPage });
    },

    async fetchTopAnime(sort = "SCORE_DESC", page = 1, perPage = 10) {
        const query = `
            query ($page: Int, $perPage: Int, $sort: [MediaSort]) {
                Page(page: $page, perPage: $perPage) {
                    media(type: ANIME, sort: $sort) {
                        id
                        title {
                            romaji
                            english
                        }
                        coverImage {
                            medium
                        }
                        averageScore
                        popularity
                        episodes
                        format
                    }
                }
            }
        `;

        return this.makeRequest(query, { page, perPage, sort });
    },

    async searchAnime(search, page = 1) {
        const query = `
            query ($search: String, $page: Int) {
                Page(page: $page, perPage: 12) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                    }
                    media(type: ANIME, search: $search) {
                        id
                        title {
                            romaji
                            english
                        }
                        coverImage {
                            medium
                        }
                        format
                        episodes
                        duration
                        status
                        averageScore
                    }
                }
            }
        `;

        return this.makeRequest(query, { search, page });
    },

    async getAnimeDetails(id) {
        const query = `
            query ($id: Int) {
                Media(id: $id, type: ANIME) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    coverImage {
                        large
                        extraLarge
                    }
                    bannerImage
                    description
                    episodes
                    duration
                    status
                    season
                    seasonYear
                    format
                    genres
                    tags {
                        name
                        rank
                    }
                    averageScore
                    popularity
                    studios {
                        nodes {
                            name
                        }
                    }
                    relations {
                        edges {
                            relationType
                            node {
                                id
                                title {
                                    romaji
                                }
                                coverImage {
                                    medium
                                }
                                format
                            }
                        }
                    }
                    recommendations(sort: RATING_DESC) {
                        nodes {
                            mediaRecommendation {
                                id
                                title {
                                    romaji
                                }
                                coverImage {
                                    medium
                                }
                            }
                        }
                    }
                }
            }
        `;

        return this.makeRequest(query, { id });
    },

    async makeRequest(query, variables = {}) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            });

            const json = await response.json();
            
            if (json.errors) {
                console.error('GraphQL Errors:', json.errors);
                throw new Error('GraphQL Error');
            }

            return json.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}; 