var slideIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > x.length) {
                slideIndex = 1
            }
            x[slideIndex - 1].style.display = "block";
            setTimeout(carousel, 5000);
        }
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }

        function myFunction() {
            var x = document.getElementById("maNav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        function myFunction2(){
            var x =document.getElementById("maNav");
                x.className=x.className.replace(" responsive","") ;
        }

        var navContainer = document.getElementById("maNav");
        var tabs = navContainer.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }


        var tabContainer = document.getElementById("navProject");
        var tabs2 = tabContainer.getElementsByClassName("tab2");
        
            for (var j = 0; j < tabs2.length; j++) {
                tabs2[j].addEventListener("click", function () {
                    var current = document.getElementsByClassName("selected");
                    current[0].className = current[0].className.replace(" selected", "");
                    this.className += " selected";
                });
        }

        function select(wanted) {
            var a = new RegExp("unselected");
            var b = new RegExp("cap-bot " + wanted);
            var projectContainer = document.getElementById("projets");
            switch (wanted) {
            case 'all':
                var projects = projectContainer.getElementsByClassName("cap-bot");
                for (var i = 0; i < projects.length; i++) {

                    projects[i].className = projects[i].className.replace(" unselected", "");

                }
                break;
            case 'creative':
                var projects = projectContainer.getElementsByClassName("cap-bot");
                var test = new RegExp("cap-bot " + wanted);
                for (var i = 0; i < projects.length; i++) {
                    if (a.test(projects[i].className)) {

                        projects[i].className = projects[i].className.replace(" unselected", "");

                    }
                }
                for (var i = 0; i < projects.length; i++) {
                    if (!(b.test(projects[i].className))) {
                        projects[i].className += " unselected";
                    }
                }
                break;
            case 'corporate':
                var projects = projectContainer.getElementsByClassName("cap-bot");
                for (var i = 0; i < projects.length; i++) {
                    if (a.test(projects[i].className)) {
                        projects[i].className = projects[i].className.replace(" unselected", "");
                    }
                }
                for (var i = 0; i < projects.length; i++) {
                    if (!(b.test(projects[i].className))) {
                        projects[i].className += " unselected";
                    }
                }
                break;
            case 'portfolio':
                var projects = projectContainer.getElementsByClassName("cap-bot");
                for (var i = 0; i < projects.length; i++) {
                    if (a.test(projects[i].className)) {
                        projects[i].className = projects[i].className.replace(" unselected", "");
                    }
                }
                for (var i = 0; i < projects.length; i++) {
                    if (!(b.test(projects[i].className))) {
                        projects[i].className += " unselected";
                    }
                }
                break;
            }


        }