export const cheerioToObject = ($: any, el: any) => {
    const ulList = [];
    const bodyList = $(el);
    // bodyList.map((i, element) => {
    //     ulList[i] = {
    //         rank: i + 1,
    //         // 4
    //         title: $(element).find("td.info a.title").text().replace(/\s/g, ""),
    //         artist: $(element).find("td.info a.artist").text().replace(/\s/g, ""),
    //     };
    // });
    return ulList
};
