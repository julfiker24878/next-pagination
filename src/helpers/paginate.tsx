export const paginate = (items, pageNumber, pageSize) => {
    const paginatedPosts = paginate(data, currentPage, pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};