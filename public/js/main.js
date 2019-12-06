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
        let targetDiv = document.querySelector("#AF");
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
        let targetDiv = document.querySelector("#OC");
        let dataContent = `
        <div class="flags">
            <h2>${ocdata.oc_name}</h2>
            <img>${ocdata.oc_img}</img>
            <h3>${ocdata.oc_num}</h3>
        </div>
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

      function getDataOceania2(ocdata) {
        let targetDiv = document.querySelector("#OC2");
        let dataContent = `
        <div class="flags">
            <h2>${ocdata.oc_name}</h2>
            <img>${ocdata.oc_img}</img>
            <h3>${ocdata.oc_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataOc2() {
        let url = `/condata/oceania2`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataOceania2(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** OT

      function getDataOther(otdata) {
        let targetDiv = document.querySelector("#OT");
        let dataContent = `
        <div class="flags">
            <h2>${otdata.ot_name}</h2>
            <img>${otdata.ot_img}</img>
            <h3>${otdata.ot_num}</h3>
        </div>
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
        let targetDiv = document.querySelector("#AM");
        let dataContent = `
        <div class="flags">
            <h2>${amdata.am_name}</h2>
            <img>${amdata.am_img}</img>
            <h3>${amdata.am_num}</h3>
        </div>
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

      function getDataAmerica2(amdata) {
        let targetDiv = document.querySelector("#AM2");
        let dataContent = `
        <div class="flags">
            <h2>${amdata.am_name}</h2>
            <img>${amdata.am_img}</img>
            <h3>${amdata.am_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAm2() {
        let url = `/condata/america2`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAmerica2(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAmerica3(amdata) {
        let targetDiv = document.querySelector("#AM3");
        let dataContent = `
        <div class="flags">
            <h2>${amdata.am_name}</h2>
            <img>${amdata.am_img}</img>
            <h3>${amdata.am_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAm3() {
        let url = `/condata/america3`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAmerica3(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAmerica4(amdata) {
        let targetDiv = document.querySelector("#AM4");
        let dataContent = `
        <div class="flags">
            <h2>${amdata.am_name}</h2>
            <img>${amdata.am_img}</img>
            <h3>${amdata.am_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAm4() {
        let url = `/condata/america4`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAmerica4(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** EU

      function getDataEurope(eudata) {
        let targetDiv = document.querySelector("#EU");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
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

      function getDataEurope2(eudata) {
        let targetDiv = document.querySelector("#EU2");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu2() {
        let url = `/condata/europe2`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope2(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataEurope3(eudata) {
        let targetDiv = document.querySelector("#EU3");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu3() {
        let url = `/condata/europe3`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope3(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataEurope4(eudata) {
        let targetDiv = document.querySelector("#EU4");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu4() {
        let url = `/condata/europe4`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope4(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataEurope5(eudata) {
        let targetDiv = document.querySelector("#EU5");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu5() {
        let url = `/condata/europe5`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope5(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataEurope6(eudata) {
        let targetDiv = document.querySelector("#EU6");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu6() {
        let url = `/condata/europe6`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope6(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataEurope7(eudata) {
        let targetDiv = document.querySelector("#EU7");
        let dataContent = `
        <div class="flags">
            <h2>${eudata.eu_name}</h2>
            <img>${eudata.eu_img}</img>
            <h3>${eudata.eu_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataEu7() {
        let url = `/condata/europe7`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataEurope7(data);
            })
            .catch((err) => console.log(err));
      }

      //   *********************************************************** AS

      function getDataAsia(asdata) {
        let targetDiv = document.querySelector("#AS");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
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

      function getDataAsia2(asdata) {
        let targetDiv = document.querySelector("#AS2");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs2() {
        let url = `/condata/asia2`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia2(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia3(asdata) {
        let targetDiv = document.querySelector("#AS3");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs3() {
        let url = `/condata/asia3`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia3(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia4(asdata) {
        let targetDiv = document.querySelector("#AS4");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs4() {
        let url = `/condata/asia4`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia4(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia5(asdata) {
        let targetDiv = document.querySelector("#AS5");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs5() {
        let url = `/condata/asia5`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia5(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia6(asdata) {
        let targetDiv = document.querySelector("#AS6");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs6() {
        let url = `/condata/asia6`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia6(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia7(asdata) {
        let targetDiv = document.querySelector("#AS7");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs7() {
        let url = `/condata/asia7`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia7(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia8(asdata) {
        let targetDiv = document.querySelector("#AS8");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs8() {
        let url = `/condata/asia8`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia8(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia9(asdata) {
        let targetDiv = document.querySelector("#AS9");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs9() {
        let url = `/condata/asia9`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia9(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia10(asdata) {
        let targetDiv = document.querySelector("#AS10");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs10() {
        let url = `/condata/asia10`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia10(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataAsia11(asdata) {
        let targetDiv = document.querySelector("#AS11");
        let dataContent = `
        <div class="flags">
            <h2>${asdata.as_name}</h2>
            <img>${asdata.as_img}</img>
            <h3>${asdata.as_num}</h3>
        </div>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataAs11() {
        let url = `/condata/asia11`;
                // svgdata/${this.dataset.target}
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                getDataAsia11(data);
            })
            .catch((err) => console.log(err));
      }

      
fetchDataAf();
fetchDataOc();
fetchDataOc2();
fetchDataOt();
fetchDataAm();
fetchDataAm2();
fetchDataAm3();
fetchDataAm4();
fetchDataEu();
fetchDataEu2();
fetchDataEu3();
fetchDataEu4();
fetchDataEu5();
fetchDataEu6();
fetchDataEu7();
fetchDataAs();
fetchDataAs2();
fetchDataAs3();
fetchDataAs4();
fetchDataAs5();
fetchDataAs6();
fetchDataAs7();
fetchDataAs8();
fetchDataAs9();
fetchDataAs10();
fetchDataAs11();

})();