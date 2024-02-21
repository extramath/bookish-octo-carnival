<div id="particles-js"><canvas class="particles-js-canvas-el" width="1520" height="1414" style="width: 100%; height: 100%;"></canvas>
</div>

<!-- partial -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"></script>

<script src="/jquery-1.11.1.min.js"></script>
<script src="/script.js"></script>

	<div id="login-box">
		<div class="logo">
		</div>
<!-- /.logo -->
		<div class="controls">
      <img src="/images/logo.gif" width="40px" height="40px" onclick="window.location.href='/';">
        <link rel="shortcut icon" href="/images/logo.gif" sizes="192x192" type="image/png">
      <h2>Frogie's Arcade V2</h2>

      <h5>motd: why is everything breaking so badly</h5>

      <p>if you manage to get caught and you lose your chromebook or what ever device you have not my fault</p>

		  <button class="cyan" onclick="openGame()">about:blank Cloaker (hides link from history)</button>

      <p>you should do this to hide this from your history and keep the teachers from blocking the url</p>

      <script>
      var urlObj = new window.URL(window.location.href);
        var url = window.location;
        
        if (url) {
            var win;
        
            document.querySelector('button').onclick = function() {
                if (win) {
                    win.focus();
                } else {
                    win = window.open();
                    win.document.body.style.margin = '0';
                    win.document.body.style.height = '100vh';
                    var iframe = win.document.createElement('iframe');
                    iframe.style.border = 'none';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    iframe.style.margin = '0';
                    iframe.src = url;
                    win.document.body.appendChild(iframe);
                    window.location.replace("https://ixl.com");
        
                    var interval = setInterval(function() {
                        if (win.closed) {
                            clearInterval(interval);
                            win = undefined;
        
                        }
                    }, 500);
        
        
                }
            };
        }
        </script>

      <hr class="cyan">
      <button id="view" class="cyan" onclick="window.location.href='/math';">Unblocked</button>

      <button id="view" class="purple" onclick="window.location.href='/discord.html';">Discord</button>

      <button id="view" class="cyan" onclick="window.location.href='/proxy.html';">Pr@xy</button>

      <button id="view" class="cyan" onclick="window.location.href='/partners.html';">Partners</button>

      <button id="view" class="cyan" onclick="window.location.href='/reading';">emulator.JS</button>

      <button id="view" class="cyan" onclick="window.location.href='/learning';">Apps</button>

      <button id="view" class="cyan" onclick="window.location.href='credits';">Credits</button>

      <p>Got any games to add? Submit them on the google form.</p>

      <button id="view" class="cyan" onclick="window.location.href='/form.html';">Form</button>

      <hr class="cyan">
      <button id="view" class="cyan" onclick="window.location.href='https://discord.gg/fErn6KteQn';">join discord for more links</button>

      <p>*your account has to be 10 days old and not have a default pfp</p>

      <script src="cursor.js"></script>

      <script>document.body.addEventListener("keydown", function (event) {
        if (event.key === "F12") {
            window.location.replace("https://google.com");
        }
    });</script>

		</div>

  </div>

  <style>
    p{
      color: white
    }
    h2{
      color: white
    }
    h5{
      color: white;
    }
    h4{
      color: white;
    }
    body{
      text-align: center;
    }
    a{
      text-align: left;
    }
  </style>
