import React from 'react'
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/歷年計畫/history_8_2.jpg';
import './Principles.css';
function Principles() {
    return (
        <div>
           <BackgroundImage text={"五大教育指引"} image={coverPhoto} color={"black"}/> 
           <div class="prinicples-outer">
            <div class="principles-container">
                    <div class="principles-grid11">
                        <p>
                            以英國教育哲學家(R.S. Peters)提出的三大方針作為教學的依據。分別是是培養價值觀、傳授知識以及讓學童探索學習的樂趣
                            我們的課程大綱可分為五大範疇，分別是公共衛生與健康教育、語言教育、地理與文化、科學探索以及全人發展。
                        </p>
                    </div>
                    <div class="principles-grid12">
                        <i class="fas fa-briefcase-medical"></i>
                        <h3>
                            公共衛生與健康教育
                        </h3>
                        <p>
                            認識人體和健康生活的方式，包含疾病預防、食物營養及健康教育
                        </p>
                    </div>
                    <div class="principles-grid13">
                        <i class="fas fa-language"></i>
                        <h3>
                            語言教育
                        </h3>
                        <p>以情景劇和遊戲為主，鼓勵學童多練習語言，應用於生活，範疇包括英文和中文教育。</p>
                    </div>
                    <div class="principles-grid21">
                        <i class="fas fa-atlas"></i>
                        <h3>
                            地理與文化
                        </h3>
                        <p>涵蓋地理文明、文物古蹟、各地氣候以及經濟文化，從不同的切入點認識各地，培養良好的世界觀，增進學生對世界各地的認知和文化、接觸國際層面的知識</p>
                    </div>
                    <div class="principles-grid22">
                        <i class="fas fa-microscope"></i>
                        <h3>
                            科學探索
                        </h3>
                        <p>
                            以實驗深化所學，且聯繫科學與日常生活。教授知識性內容，並確保學生能將所學的知識應用於日常生活去解決問題。
                        </p>
                    </div>
                    <div class="principles-grid23">
                        <i class="fas fa-user-friends"></i>
                        <h3>全人發展</h3>
                        <p>
                            涵蓋藝術、體育、團隊建設及人生定向，培養學童敢於創新的精神，建立正確價值觀；幫助學生發掘學術以外的以外的潛力。另外，我們會進行團隊建設活動，培養學生面對困難的能力和團隊合作精神。
                        </p>
                    </div>
            </div>
           </div>
        </div>
    )
}

export default Principles;
