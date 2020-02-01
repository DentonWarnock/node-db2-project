exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 12345,
          Make: "VW",
          Model: "Golf",
          Mileage: 125000,
          TransmissionType: "auto",
          TitleStatus: "clean"
        },
        {
          VIN: 54321,
          Make: "Toyota",
          Model: "Prius",
          Mileage: 135000,
          TransmissionType: "auto",
          TitleStatus: "clean"
        },
        {
          VIN: 15432,
          Make: "Honda",
          Model: "Accord",
          Mileage: 150000,
          TransmissionType: "manual",
          TitleStatus: "clean"
        }
      ]);
    });
};
