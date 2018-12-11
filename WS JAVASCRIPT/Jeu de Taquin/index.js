var emptyCase = {
    vlig: 4,
    vcol: 4
}

function move(lig, col) {
    if (isValid(lig,col)) {
        var videName = "case" + emptyCase.vlig + emptyCase.vcol;
        var boutonName = "case" + lig + col;

        var boutonNode = document.getElementById(boutonName);
        var videNode = document.getElementById(videName);

        var boutonValue = boutonNode.innerText;
        var videValue = videNode.innerText;

        // Change Button Values
        videNode.innerText = boutonValue;
        boutonNode.innerText = videValue;

        boutonNode.className = "emptycase";
        videNode.className = "case";

        emptyCase.vlig = lig;
        emptyCase.vcol = col;
    } else {
        console.log("DEPLACEMENT IMPOSSIBLE !!!");
    }
}

function isValid(l,c) {
    if (l == emptyCase.vlig && c == emptyCase.vcol - 1) {
        return true;
    }else if (l == emptyCase.vlig && c == emptyCase.vcol + 1) {
        return true;
    }else if (l == emptyCase.vlig - 1 && c == emptyCase.vcol) {
        return true;
    }else if (l == emptyCase.vlig + 1 && c == emptyCase.vcol) {
        return true;
    }else {
        return false;
    }
}
