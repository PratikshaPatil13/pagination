Example 1:
arrayPaginator: async function (items, current_page, per_page_items) {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
    
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);
    
        return {
            page: page,
            per_page: per_page,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    },




    let finalPageCall = await Account.arrayPaginator(returnObj, page, marRow);
    console.log("<><><finalPageCall><><>", finalPageCall);

     callback(null, finalPageCall);




Example 2:
let products = [
	{
		"id": 1,
		"name": "Product 1",
	},
	{
		"id": 2,
		"name": "Product 2",
	},
	{
		"id": 3,
		"name": "Product 3",
	},
	{
		"id": 4,
		"name": "Product 4",
	},
	{
		"id": 5,
		"name": "Product 5",
	},
	{
		"id": 6,
		"name": "Product 6",
	},
];
function pagination (items, currentPage, perPageItem) {
    let page = currentPage ? currentPage : 1;
    console.log("page ::::: ", page);
    let perPage = perPageItem ? perPageItem : 10;
    console.log("perPage ::::: ", perPage);
    let skip = (page - 1) * perPage; // will take skip value
    console.log("skip ::::: ", skip);
    console.log("111", items.slice(skip));
    console.log("222", items.slice(skip).slice(0, perPageItem));
    let paginatedItem = items.slice(skip).slice(0, perPageItem);
    console.log("paginatedItem ::::: ", paginatedItem);
    let totalPage = Math.ceil(items.length / perPage);
    console.log("totalPage ::::: ", totalPage);
    console.log("final returned object ::::: ",
    {
        page: page,
        perPage: perPage,
        prePage: page - 1 ? page - 1 : null,
        nextPage: (totalPage > page) ? page + 1 : null,
        total: items.length,
        totalPages: totalPage,
        data: paginatedItem
    });
    return {
        page: page,
        perPage: perPage,
        prePage: page - 1 ? page - 1 : null,
        nextPage: (totalPage > page) ? page + 1 : null,
        total: items.length,
        totalPages: totalPage,
        data: paginatedItem
    }
}
console.log(pagination(products, 1, 2));
