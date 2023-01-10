import "./post.css"
import Postpic from "./post-pic.jpg"
export default function post() {
  return (
    <div className="post">
        <img className="post-img"
        src={Postpic}
        alt=""
        ></img>
        <div className="post-info">
            <div className="post-cats" >
                <span className="post-cat">Music</span>
                <span className="post-cat">Life</span>
            </div>
            <span className="post-title">yash's post...</span>
            <hr/>
                <span className="post-date">1 hour ago</span>
                <p className="post-desc">cdwcwlkbla abukbva avehgc a agogoevv gvowW LFEHVFDUG7FAWS  CH8OSDHP;RGENRAOGARG FVTRAOHRBGGLVOGAR HOGISBPH9SB KSFSYABS KBDYIGSBSJPB  UAS AS,BUKDGDSU V,DS  FJLKHGFOUIHD DFBLH IHYA SHS SHATAMA AUASHAR,FKSBUOHSBDFKB UASH SJAR,MA BSU SKBGURGA HKAG YASSH DSHSAMR BISBSG  YASH SHSARRMA JBSBERRKG  GREBRGIEHEFJSYASH DJSUSD VDJBSKUSD   EUISEF   VSDHBSDVUBSD REKHA SHARMA GAJENDRA SHARMA FYASH SHAMA .</p>
        </div>
    </div>
  )
}
