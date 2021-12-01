var m = 0;
    function hod()
    {
        m++;
        document.getElementById("steps").innerHTML = "Ходов:    " + m;

    }

    function igra (ev)
    {
        var e = ev || window.event, o = e.target || e.srcElement;
        if (o.tagName != 'INPUT')
            return;
        var obj = document.getElementById('m15'),
            btn = obj.getElementsByTagName('input');
        for (var sos = o.lang.split ('-'), j = k = 0, lj = sos.length; j < lj; j++)
           if (btn [sos [j]].value < 0) {k = 1; break}
        if (!k) return;
        btn [sos [j]].style.visibility = 'visible';
        btn [sos [j]].value = o.value;
        o.style.visibility = 'hidden';
        o.value = -1;
        hod();
        for (var j = 0; j < 8; j++)
            if (btn [j].value != j + 1)
                return;
        obj.onclick = null;
        alert ('Головоломка решена!');
    }

    function simple_timer(sec, block, direction)
    {
        var time    = sec;
        direction   = direction || false;

        var hour    = parseInt(time / 3600);
        if ( hour < 1 ) hour = 0;
        time = parseInt(time - hour * 3600);
        if ( hour < 10 ) hour = '0'+hour;

        var minutes = parseInt(time / 60);
        if ( minutes < 1 ) minutes = 0;
        time = parseInt(time - minutes * 60);
        if ( minutes < 10 ) minutes = '0'+minutes;

        var seconds = time;
        if ( seconds < 10 ) seconds = '0'+seconds;

        block.innerHTML ="Время игры: "+hour+':'+minutes+':'+seconds;

        if ( direction ) {sec++; setTimeout(function(){ simple_timer(sec, block, direction); }, 1000);}
        else {
            sec--;
            if ( sec > 0 ) {setTimeout(function(){ simple_timer(sec, block, direction); }, 1000);}
            else {alert('Время вышло!');}
        }
    }

    function start_timer()
    {
        var block = document.getElementById('sample_timer');
        simple_timer(0, block, true);
    }

    function start_game()
    {
        start_timer();
        document.getElementById('start').style.display = "none";
        document.getElementById('reset').style.display = "block";

        document.getElementById('sample_timer').style.display = "block";
        document.getElementById('steps').style.display = "block";

        (function ()
        {
            var shb = document.createElement ('input');
            shb.type = 'button';
            shb.style.cssButton =  'background: rgb(212,75,56)';
            shb.style.cssText = 'height: 123px; width: 123px; font-weight: bolder; font-size: 40px ';
            for (var obj = document.getElementById('m15'), btn = new Array (), j = 0; j < 9; j++)
            {
                btn [j] = obj.appendChild(shb.cloneNode (1));
                if (!((j + 1) % 3))
                    obj.appendChild(document.createElement('br'));
            }
            btn [j - 1].style.visibility = 'hidden';
            btn [j - 1].value = -1;
            var rnd = new Array (),
                rsh = 1;
            obj.onclick = igra;
            while (rsh % 2)
            {
                for (var j = 0; j < 8; j++) rnd [j] = j + 1;
                rnd.sort (new Function ('x', 'y', 'return Math.random () - Math.random ()'));
                for (var rsh = j = 0; j < 7; rsh += s, j++)
                    for (var s = 0, k = j + 1; k < 8; k++)
                        if (rnd [k] < rnd [j])
                            s++;
            }
            for (var j = 0; j < 9; j++)
            {
                if (j < 8)
                    btn [j].value = rnd [j];
                var lng = new Array ();
                if (j - 1 >= 0 && j % 3)
                    lng [lng.length] = j - 1;

                if (j + 1 < 9 && (j + 1) % 3)
                    lng [lng.length] = j + 1;

                if (j - 3 >= 0)
                    lng [lng.length] = j - 3;

                if (j + 3 < 9)
                    lng [lng.length] = j + 3;

                btn [j].lang = lng.sort ().join ('-');
            }

        }) ();
    }