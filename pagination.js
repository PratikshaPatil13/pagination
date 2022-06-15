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