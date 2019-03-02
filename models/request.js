module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request", {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    budget: DataTypes.STRING,
    description: DataTypes.TEXT,
    vendor: DataTypes.STRING,
    vendoremail: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    venue: DataTypes.STRING,
    venueaddress: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventTime: DataTypes.TIME,

    
  });
  return Request;
}