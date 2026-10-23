const picker = (array, keys) => {
    return !!array && array.reduce((acc, curObj) => {
        const selected = {}
        keys.forEach((key) => {
            if (key in curObj) selected[key] = curObj[key]
        })
        acc.push(selected)
        return selected
    }, [])
}

export default picker