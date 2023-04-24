let showPoinBtn = document.getElementById("showPoin");
showPoinBtn.addEventListener("click",function() {
    let marthPoinElement = document.getElementById("marthPoin").value;
    let literaturePoinElement = document.getElementById("literaturePoin").value;
    let englishPoinElement = document.getElementById("englishPoin").value;
    // console.log(marthPoinElement);
    const FIRST_AREA = "KV1";
    const FIRST_AREA_POIN = 0.75;
    const SP_SECOND_AREA = "KV2-NT";
    const SP_SECOND_AREA_POIN = 0.5;
    const SECOND_AREA = "KV2"
    const SECOND_AREA_POIN = 0.2;
    const THIRD_AREA = "KV3";
    const THIRD_AREA_POIN = 0;
    let area =document.getElementById("area").value;
    let areaPoin;
    switch (area){
        case FIRST_AREA:
            areaPoin = FIRST_AREA_POIN;
        break;
        case SP_SECOND_AREA:
            areaPoin = SP_SECOND_AREA_POIN;
        break;
        case SECOND_AREA:
            areaPoin = SECOND_AREA_POIN;
        break;
        case THIRD_AREA:
            areaPoin = THIRD_AREA_POIN;
        break;
    }
    let poinHtml = Number(marthPoinElement)+Number(literaturePoinElement)+Number(englishPoinElement)+ areaPoin;
    let result = document.getElementById("result");
    result.innerHTML = `Diem la: ${poinHtml}`;
});
