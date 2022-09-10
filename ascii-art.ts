const art = require ('ascii-art')
art.font("PFS-TDF 2022", 'doom', (err, renderer) => {
    console.log(err || renderer);
})
