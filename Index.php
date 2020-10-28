<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="images/M.ico">
<!-- <iframe style="display: none;" width="560" height="315" src="https://www.youtuberepeater.com/watch?v=ssyJLUdDl7I#gsc.tab=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
	<!-- Character set   -->
    <meta charset="utf-8">
        <!-- icon -->


	<!-- Tells the Internet Explorer to display the webpage in the highest mode available.   -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- For rendering on mobile devices and touch zooming   -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- link bootstrap -->
    <link rel="stylesheet" href="CSS/bootstrap.min.css">
    <!-- custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Game Page</title>
</head>
<body>
<div class="Title">
    <h1>Numbers</h1>
</div>
<div class="number-container">
</div>
    <table class="main-container">
        <tbody>
            <tr>
                <td><button type="button" class="btn btn-dark start">start</button></td>
                <td><button type="button" class="btn btn-dark reset">Reset</button></td>
            </tr>
            <tr>
                <td><button type="button" class="btn btn-dark code"><p id="code"></p></button></td>
                <td><button type="button" class="btn btn-dark pressed"><p id="pressed"></p></button></td>
            </tr>
            <tr>
                <td><div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle about" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Made By Maik Rutten IC18AO.e</a>
                    </div>
                    </div>
                </td>
                <td><div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle help" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item help1" href="#">This is a reaction game. Press start to play the game. When start is clicked you get a 5 digit code and you need to click that code as fast as you can. When you get the code correct you will get a different 5 digit code. If you got it incorrect you need to start over with the same code. you get 1 minute to get as many as possible. Good Luck Player!!</a>
                    </div>
                    </div>
                </td>            
            </tr>
            <tr>
            <td></td>
                <td><div id="timer"><div><span id="seconds">60</span></div></td>

            </tr>
        </tbody>
    </table>
    <div class="count"><span id="correct">0</span></div>
    <!-- <div class="total"><span id="total">0</span></div> -->
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
     <!-- Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <!-- Bootstrap Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Timer plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/timer.jquery/0.7.0/timer.jquery.js"></script>
    <!-- custom JS -->
    <script src="js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


</body>
</html>