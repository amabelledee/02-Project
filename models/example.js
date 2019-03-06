module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    budget: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendor: DataTypes.STRING,
    vendoremail: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    venue: DataTypes.STRING,
    venueaddress: DataTypes.STRING,
    eventDate: DataTypes.TEXT,
    eventTime: DataTypes.TEXT,

    
  })
  return Example;
 
  


 }
