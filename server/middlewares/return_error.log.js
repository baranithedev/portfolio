const return_error = (err, req, res, next) => {
    const status_code = err.status || err.statusCode || 500
    const is_production = process.env.NODE_ENV === "production"
    const error_message = (status_code === 500 && is_production? "Internal server error": (err.message || "Internal server error"))
    if (!is_production) console.error(`[${req.method}] ${req.originalUrl} - ${status_code}: ${err.stack || err}`);
    return res.status(status_code).json({
        success: false,
        message: error_message,
        ...(is_production? {}: { stack: err.stack })
    })
}

module.exports = return_error