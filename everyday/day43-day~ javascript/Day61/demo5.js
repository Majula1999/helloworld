var computed = []

function fibb(n) {
    if (n < 3) {
        return 1
    } else {
        if (computed[n]) {
            return computed[n]
        }
        var result = fibb(n - 1) + fibb(n - 2)
        computed[n] = result
        return result
    }
}