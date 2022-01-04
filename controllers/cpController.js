const express=require('express');
const User=require('../models/schemauser');

let rpRating=800;
let run=false;
let subData;

function GetData() {
    const curuser=await User.findById(req.user.id);
    let cfh=curuser.cfhandle;
    let getdata={};
    urlcf="https://competitive-programming-score.herokuapp.com/api/codeforces/"+cfh;
    fetch(urlcf).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        // cfrating.innerHTML=data.rating;
        // cfcrank.innerHTML=data.rank;
        // cfmrating.innerHTML=data["max rating"];
        // rpRating=data.rating;
        getdata.cfData=data;
    })

    let cch=cchandle;
    urlcc="https://competitive-programming-score.herokuapp.com/api/codechef/"+cch;
    fetch(urlcc).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        // ccrating.innerHTML=data.rating;
        // cccrank.innerHTML=data.stars;
        // ccmrating.innerHTML=data.highest_rating;
        getdata.ccdata=data;
    })
    run=true;
    return getdata;
}

function GetUpcomingData() {
    let getUpcomingData={};
    urlud="https://codeforces.com/api/contest.list?gym=false";
    fetch(urlud).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let x=0;
        while (data.result[x].phase=="BEFORE")
            x++;
        x--;
        let y=0;
        let u="https://codeforces.com/contests/"+data.result[x].id;
        let s=-1*(data.result[x].relativeTimeSeconds);
        while (y<3) {
            if (y==0) {
                contest1.innerHTML=data.result[x].name;
                time1.innerHTML="(starts in "+secondsToDhms(s)+")";
                ac1.href=u;
            }
            else if (y==1) {
                contest2.innerHTML=data.result[x].name;
                time2.innerHTML="(starts in "+secondsToDhms(s)+")";
                ac2.href=u;
            }
            if (y==2) {
                contest3.innerHTML=data.result[x].name
                time3.innerHTML="(starts in "+secondsToDhms(s)+")";
                ac3.href=u;
            }
            y++;
            x--;
        }
    })
}

function secondsToDhms(seconds) {
    seconds=Number(seconds);
    var d=Math.floor(seconds/(3600*24));
    var h=Math.floor(seconds%(3600*24)/3600);
    var m=Math.floor(seconds%3600/60);
    var s=Math.floor(seconds%60);

    var dDisplay=d>0? d+("d-"):"";
    var hDisplay=h>0? h+("h-"):"";
    var mDisplay=m>0? m+("m-"):"";
    var sDisplay=s>0? s+("s"):"";
    return dDisplay+hDisplay+mDisplay+sDisplay;
}

function GetProblems() {
    urlgp="https://codeforces.com/api/problemset.problems";
    fetch(urlgp).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let x=0;
        if (rpRating<=800)
            rpRating=800;
        else if (rpRating>800&&rpRating<=1000)
            rpRating=1000;
        else if (rpRating>1000&&rpRating<=1200)
            rpRating=1200;
        else if (rpRating>1200&&rpRating<=1400)
            rpRating=1400;
        else if (rpRating>1400&&rpRating<=1600)
            rpRating=1600;
        else if (rpRating>1600&&rpRating<=1800)
            rpRating=1800;
        else if (rpRating>1800&&rpRating<=2000)
            rpRating=2000;
        else if (rpRating>2000&&rpRating<=2200)
            rpRating=2200;
        else if (rpRating>2200&&rpRating<=2400)
            rpRating=2400;
        else if (rpRating>2400&&rpRating<=2600)
            rpRating=2600;
        else if (rpRating>2600&&rpRating<=2800)
            rpRating=2800;
        else if (rpRating>2800&&rpRating<=3000)
            rpRating=3000;
        else if (rpRating>3000&&rpRating<=3200)
            rpRating=3200;
        else
            rpRating=3400;
        for (let problem of data.result.problems) {
            if (problem&&problem.rating&&problem.rating==rpRating) {
                console.log(problem);
                let u="https://codeforces.com/problemset/problem/"+problem.contestId+"/"+problem.index;
                if (x==0) {
                    problem1.innerHTML=problem.name;
                    linkProblem1.href=u;
                }
                else if (x==1) {
                    problem2.innerHTML=problem.name;
                    linkProblem2.href=u;
                }
                else {
                    problem3.innerHTML=problem.name;
                    linkProblem3.href=u;
                }
                x++;
            }
            if (x==3)
                break;
        }
    })
}

