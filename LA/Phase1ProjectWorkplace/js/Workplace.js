        function ChangeToUp1() {
                document.getElementById("TriBtn1").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-1" ).setAttribute( "onClick", "javascript: ChangeToDown1();" );
            }

            function ChangeToUp2() {
                document.getElementById("TriBtn2").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-2" ).setAttribute( "onClick", "javascript: ChangeToDown2();" );
            }

            function ChangeToUp3() {
                document.getElementById("TriBtn3").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-3" ).setAttribute( "onClick", "javascript: ChangeToDown3();" );
            }

            function ChangeToUp4() {
                document.getElementById("TriBtn4").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-4" ).setAttribute( "onClick", "javascript: ChangeToDown4();" );
            }
           
            function ChangeToDown1() {
                document.getElementById("TriBtn1").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-1" ).setAttribute( "onClick", "javascript: ChangeToUp1();" );
            }

             function ChangeToDown2() {
                document.getElementById("TriBtn2").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-2" ).setAttribute( "onClick", "javascript: ChangeToUp2();" );
            }

             function ChangeToDown3() {
                document.getElementById("TriBtn3").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-3" ).setAttribute( "onClick", "javascript: ChangeToUp3();" );
            }

             function ChangeToDown4() {
                document.getElementById("TriBtn4").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-4" ).setAttribute( "onClick", "javascript: ChangeToUp4();" );
            }

            function ChangeToUpSubMenu1() {
                document.getElementById("TriBtn11").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-11" ).setAttribute( "onClick", "javascript: ChangeToDownSubMenu1();" );
            }

            function ChangeToDownSubMenu1() {
                document.getElementById("TriBtn11").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-11" ).setAttribute( "onClick", "javascript: ChangeToUpSubMenu1();" );
            }

            function ChangeToUpSubMenu2() {
                document.getElementById("TriBtn22").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-22" ).setAttribute( "onClick", "javascript: ChangeToDownSubMenu2();" );
            }

            function ChangeToDownSubMenu2() {
                document.getElementById("TriBtn22").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-22" ).setAttribute( "onClick", "javascript: ChangeToUpSubMenu2();" );
            }