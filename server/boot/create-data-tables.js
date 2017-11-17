module.exports = (app) => {
  app.dataSources.mysqlDs.automigrate('Peoples', (err) => {
    if ( err ) throw err;

    app.models.People.crate([{
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      gender: 'Male'
    }, {
      name: 'C3PO',
      height: 167,
      mass: 75,
      gender: 'Undefined'
    }], (err, People) => {
      if ( err ) throw err;

      console.log(`Models that've been created: \n ${People}`);
    });
  });
}
