const base_Url=import.meta.env.VITE_BASE_URL
console.log(base_Url)
export const getJobCards = async ({filters,pageLimitStart}) => {
    try {
      const response = await fetch(
        `${base_Url}/Job Card?fields=["*"]&filters=${JSON.stringify(filters)}&limit=20&limit_start=${pageLimitStart}`
      ,{
        method: "GET",
        credentials: 'include',
       // headers: {
          //Authorization: "token 6d76e6b39cc7a4d:f63543ae0fad40f", // Buraya uygun token ekleyin
      //  },
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Job Cards Fetch Error:", error);
    }
  };
