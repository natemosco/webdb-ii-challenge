exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("carTable")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("carTable").insert([
          {
            VIN: "1C4RJFBG5DC522189",
            make: "Jeep",
            model: "Grand Cherokee",
            mileage: "45,000",
            transmission: "",
            titleStatus: ""
          },
          {
            VIN: "JHLRE38357C030678",
            make: "Honda",
            model: "CR V",
            mileage: "120,000",
            transmission: "",
            titleStatus: ""
          },
          {
            VIN: "JH4CC2560RC008414",
            make: "Acura",
            model: "Vigor",
            mileage: "90,000",
            transmission: "",
            titleStatus: ""
          },
          {
            VIN: "1G1JC1444PZ215071",
            make: "Chevrolet",
            model: "Cavalier VL RS",
            mileage: "145,500",
            transmission: "",
            titleStatus: ""
          },
          {
            VIN: "JH4DA1844GS001970",
            make: "Acura",
            model: "Integra",
            mileage: "66,000",
            transmission: "",
            titleStatus: ""
          },
          {
            VIN: "5TFHW5F13AX136128",
            make: "Toyota",
            model: "Tundra",
            mileage: "185,000",
            transmission: "",
            titleStatus: ""
          }
        ]);
      })
  );
};
