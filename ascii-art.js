var art = require('ascii-art');
art.font("PFS-TDF 2022", 'doom', function (err, renderer) {
    console.log(err || renderer);
});
