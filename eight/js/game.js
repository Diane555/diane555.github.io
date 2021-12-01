const right = 1, left = 2, up = 3, down = 4

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

export function actions(state)
{
    const [i, j] = findZero(state)
    if(i === 0 && j === 0)
        return [up, left]
    else if(i === 0 && j === 2)
        return [up, right]
    else if(i === 2 && j === 0)
        return [down, left]
    else if(i === 2 && j === 2)
        return [down, right]
    else if(i === 0)
        return [up, left, right]
    else if(i === 2)
        return [down, left, right]
    else if(j === 0)
        return [up, down, left]
    else if(j === 2)
        return [up, down, right]
    else
        return [up, down, left, right]
}

export function successor(state, action)
{
    const newS =[state[0].slice(), state[1].slice(), state[2].slice()]
    const [i, j] = findZero(state)
    if(action === left)
    {
        newS[i][j] = state[i][j+1]
        newS[i][j + 1] = 0
    }
    else if(action === right)
    {
        newS[i][j] = state[i][j - 1]
        newS[i][j - 1] = 0
    }
    else if(action === down)
    {
        newS[i][j] = state[i - 1][j]
        newS[i - 1][j] = 0
    }
    else if(action === up)
    {
        newS[i][j] = state[i + 1][j]
        newS[i + 1][j] = state[i][j]
    }
    return newS
}

export function move(state, i, j)
{
    const zero = findZero(state)
    const _actions = actions(state)
    if(_actions.includes(right) && i === zero[0] && j === zero[1] - 1)
        return successor(state, right)
    else if(_actions.includes(left) && i === zero[0] && j === zero[1] + 1)
        return successor(state, left)
    else if(_actions.includes(up) && i === zero[0] + 1 && j === zero[1])
        return successor(state, up)
    else if(_actions.includes(down) && i === zero[0] - 1 && j === zero[1])
        return successor(state, down)
    else
        return state
}


export function goalTest(state)
{
    const goalState = [
        [1, 2,3],
        [4, 5, 6],
        [7, 8, 0]]
    return is_equal(goalState, state)
}

function is_equal(s1, s2)
{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            if(s1[i][j] !== s2[i][j])
                return false
        }
    }
    return true
}