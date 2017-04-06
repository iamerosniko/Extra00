 function ChangeToUp() {
                document.getElementById("TriBtn1").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-1" ).setAttribute( "onClick", "javascript: ChangeToDown();" );

                document.getElementById("TriBtn2").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-2" ).setAttribute( "onClick", "javascript: ChangeToDown();" );

                document.getElementById("TriBtn3").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-3" ).setAttribute( "onClick", "javascript: ChangeToDown();" );

                document.getElementById("TriBtn4").className = "glyphicon glyphicon-triangle-top";
                document.getElementById( "btn-4" ).setAttribute( "onClick", "javascript: ChangeToDown();" );
            }

            function ChangeToDown() {
                document.getElementById("TriBtn1").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-1" ).setAttribute( "onClick", "javascript: ChangeToUp();" );

                document.getElementById("TriBtn2").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-2" ).setAttribute( "onClick", "javascript: ChangeToUp();" );

                document.getElementById("TriBtn3").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-3" ).setAttribute( "onClick", "javascript: ChangeToUp();" );

                document.getElementById("TriBtn4").className = "glyphicon glyphicon-triangle-bottom";
                document.getElementById( "btn-4" ).setAttribute( "onClick", "javascript: ChangeToUp();" );
            }