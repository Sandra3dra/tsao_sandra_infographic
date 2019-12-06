(()=> {

    const waypoint = new Waypoint({

        element: document.getElementById('1'),

        handler: function(direction) {
          console.log('Scrolled to Africa!')
            this.classList.remove("hidden")
        },
        offset: "20%"
      })

      const waypoint2 = new Waypoint({

        element: document.getElementById('2'),

        handler: function(direction) {
          console.log('Scrolled to Oceania!')
          this.classList.remove("hidden")
        },
        offset: "30%"
      })

      const waypoint3 = new Waypoint({

        element: document.getElementById('3'),

        handler: function(direction) {
          console.log('Scrolled to Other Countries!')
          this.classList.remove("hidden")
        },
        offset: "40%"
      })

      const waypoint4 = new Waypoint({

        element: document.getElementById('4'),

        handler: function(direction) {
          console.log('Scrolled to America!')
          this.classList.remove("hidden")
        },
        offset: "50%"
      })

      const waypoint5 = new Waypoint({

        element: document.getElementById('5'),

        handler: function(direction) {
          console.log('Scrolled to Europe!')
          this.classList.remove("hidden")
        },
        offset: "50%"
      })

      const waypoint6 = new Waypoint({

        element: document.getElementById('6'),

        handler: function(direction) {
          console.log('Scrolled to Asia!')
          this.classList.remove("hidden")
        },
        offset: "50%"
      })

    //   *********************************************************** AF
    
      
    function getDataAfrica(afdata) {
        let targetDiv = document.querySelector(".AF");
        let dataContent = `
        <h2>${afdata.af_name}</h2>
        <img>${afdata.af_img}</img>
        <h3>${afdata.af_num}</h3>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAf() {
        let url = `/condata/africa`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAfrica(data);
            })
            .catch((err) => console.log(err));
      }

    //   *********************************************************** OC

      function getDataOceania(ocdata) {
        let targetDiv = document.querySelector(".OC-wrapper");
        let dataContent = `
        {{#each data}}
        <div class="flags">
            <h2>${ocdata.oc_name}</h2>
            <img>${ocdata.oc_img}</img>
            <h3>${ocdata.oc_num}</h3>
        </div>
        {{/each}}
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataOc() {
        let url = `/condata/oceania`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataOceania(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** OT

      function getDataOther(otdata) {
        let targetDiv = document.querySelector(".OT-wrapper");
        let dataContent = `
        {{#each data}}
        <div class="flags">
            <h2>${otdata.ot_name}</h2>
            <img>${otdata.ot_img}</img>
            <h3>${otdata.ot_num}</h3>
        </div>
        {{/each}}
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataOt() {
        let url = `/condata/other`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataOther(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** AM

      function getDataAmerica(amdata) {
        let targetDiv = document.querySelector(".AM-wrapper");
        let dataContent = `
        {{#each data}}
        <div class="flags">
            <h2>${amdata.am_name}</h2>
            <img>${amdata.am_img}</img>
            <h3>${amdata.am_num}</h3>
        </div>
        {{/each}}
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAm() {
        let url = `/condata/america`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAmerica(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** EU

      function getDataEurope(eudata) {
        let targetDiv = document.querySelector(".EU-wrapper");
        let dataContent = `
        {{#each data}}
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        {{/each}}
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu() {
        let url = `/condata/europe`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** AS

      function getDataAsia(asdata) {
        let targetDiv = document.querySelector(".AS-wrapper");
        let dataContent = `
        {{#each data}}
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        {{/each}}
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs() {
        let url = `/condata/asia`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia(data);
            })
            .catch((err) => console.log(err));
      }

      
fetchDataAf();
fetchDataOc();
fetchDataOt();
fetchDataAm();
fetchDataEu();
fetchDataAs();

})();