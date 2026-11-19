(function () {
    var translations = [
        ["🔥 HeatMap: ความเข้มการทรุดตัวสัมพัทธ์", "🔥 Heatmap: Relative subsidence intensity"],
        ["คำอธิบาย HeatMap", "Heatmap legend"],
        ["ไล่สีจากน้ำเงินซึ่งมีความเข้มต่ำ ไปแดงซึ่งมีความเข้มสูงสุด", "Color scale from lower intensity (blue) to highest intensity (red)"],
        ["ต่ำ (น้ำเงิน/ฟ้า)", "Low (blue/cyan)"],
        ["สูงสุด (แดง)", "Highest (red)"],
        ["สีเทียบกับกลุ่มจุดที่เข้มที่สุดในมุมมองปัจจุบันและเปลี่ยนตามการซูม • radius 20 px, blur 15 px เป็นค่าภาพ ไม่ใช่ระยะทางจริง", "Colors are relative to the strongest cluster in the current view and change with zoom. Radius 20 px and blur 15 px are display sizes, not real-world distances."],
        ["พื้นที่เทาโปร่งแสง เส้นประแบ่ง 50 เขต และเส้นทึบหนาแสดงขอบนอก กทม.", "Translucent gray districts, dashed internal borders, and a thick solid Bangkok outer boundary"],
        ["📘 คู่มือ", "📘 Manual"],
        ["1. คำนิยามตัวแปร:", "1. Variable definitions:"],
        ["ค่าการทรุดตัวสะสมจริง (Calibrated by CUSV GNSS)", "Cumulative subsidence calibrated by CUSV GNSS"],
        ["อิทธิพลที่แบบจำลองใช้อธิบายการทรุดตัว", "Influence of each feature on the model's subsidence estimate"],
        ["2. ข้อจำกัดโมเดล (Model Limitations):", "2. Model limitations:"],
        ["เนื่องจากพฤติกรรมการอัดตัวคายน้ำเปลี่ยนแปลงตามเวลา จึงต้อง Retrain โมเดลด้วยข้อมูลใหม่ทุก 3-5 ปี", "Because consolidation behavior changes over time, retrain the model with new data every 3-5 years."],
        ["โมเดลขาดตัวแปรแฝง เช่น ปริมาณสูบน้ำเถื่อน และการมีค่า NDBI ติดลบ (พื้นที่เกษตร) อาจทำให้อ่านค่าน้ำหนักบรรทุกคลาดเคลื่อน", "The model omits hidden factors such as unrecorded groundwater pumping. Negative NDBI values (for example, farmland) may also distort estimated load effects."],
        ["3. ทฤษฎีวิศวกรรมและการแปลผล (Engineering Anomaly):", "3. Engineering theory and interpretation:"],
        ["ที่มาของข้อมูล:", "Data source:"],
        ["ตัวเลขเฉลี่ยรายปีเป็นการคำนวณย้อนกลับจาก InSAR สะสม 10 ปี (2557-2567) ซึ่งสอดคล้องประจักษ์กับรายงานสถานการณ์น้ำบาดาล พ.ศ. 2565 (กรมทรัพยากรน้ำบาดาล)", "Annual averages are back-calculated from 10 years of cumulative InSAR measurements (2014-2024), consistent with the 2022 groundwater situation report from the Department of Groundwater Resources."],
        ["พื้นที่ชั้นใน:", "Inner-city areas:"],
        ["ทรุดตัวชะลอลงที่ 0-10 มม./ปี (เทียบเท่าสะสม 0-100 มม.)", "Subsidence has slowed to 0-10 mm/year (equivalent to 0-100 mm cumulative)."],
        ["พบการทรุดตัวสะสมอย่างรุนแรงในรอบ 10 ปี (พ.ศ. 2557-2567) บริเวณชานเมืองและรอยต่อปริมณฑล โดยพบสูงสุดทื่ ฝั่งตะวันออก (เขตประเวศ) 177.5 มิลลิเมตร และ ฝั่งตะวันตกเฉียงใต้ (เขตบางขุนเทียน) 127 มิลลิเมตร", "Severe cumulative subsidence over 2014-2024 occurs in the suburbs and metropolitan fringe, reaching 177.5 mm in eastern Prawet and 127 mm in southwestern Bang Khun Thian."],
        ["กรณีศึกษา (สถานี 32001 ประเวศ):", "Case study (Station 32001, Prawet):"],
        ["ทรุดตัวจริงสูงถึง -177.5 มม. แต่โมเดลทายต่ำกว่าจริง เนื่องจากมีชั้นดินเหนียวอ่อน (Soft Clay) หนาถึง 40.83 ม. การวิเคราะห์ด้วย SHAP Value พบอิทธิพลจากตัวแปรหน่วงเวลาสูง (Lag 3-5) บ่งชี้ถึงการเกิดการอัดตัวแบบไม่ยืดหยุ่นถาวร (Inelastic Consolidation) ซึ่งเป็นผลพวงจากการสูบน้ำในอดีต (Delayed Compression) โครงสร้างดินจึงเสียหายถาวรไม่สามารถคืนตัวได้แม้ระดับความดันน้ำปัจจุบันจะฟื้นตัวแล้วก็ตาม", "Observed subsidence reaches -177.5 mm, but the model underpredicts it. The site has 40.83 m of soft clay. Strong lagged-feature contributions (lags 3-5) in the SHAP analysis indicate inelastic consolidation and delayed compression caused by past groundwater pumping; the soil structure does not fully recover even when current groundwater pressure improves."],
        ["4. เกณฑ์เตือนภัย (Thresholds):", "4. Warning thresholds:"],
        ["แผนที่นี้ใช้การแสดงผล 2 รูปแบบซ้อนทับกัน (Dual-Layer Visualization) เพื่ออธิบายทั้งมิติวิศวกรรมและมิติเชิงพื้นที่:", "The map overlays two visual encodings to show both engineering risk and spatial patterns:"],
        ["จุดพิกัด (Point Marker - เกณฑ์ตายตัว): บ่งบอกความเสี่ยงเฉพาะจุด", "Point markers (fixed thresholds): indicate risk at each station."],
        ["0-50 มม. (ปลอดภัย)", "0-50 mm (Safe)"],
        ["51-100 มม. (เฝ้าระวัง)", "51-100 mm (Watch)"],
        [">100 มม. (วิกฤตทางวิศวกรรม)", ">100 mm (Engineering critical)"],
        ["(เสี่ยงต่อ Differential Settlement ของท่อประปา - อ้างอิง: เฉลิมพล, 2567)", "(Potential differential-settlement risk for water pipes; reference: Chalermphon, 2024.)"],
        ["รังสีความร้อน (HeatMap - เกณฑ์สัมพัทธ์):", "Heatmap (relative scale):"],
        ["สีแสดงความเข้มจากค่าน้ำหนักการทรุดของสถานีที่รวมกันในบริเวณใกล้เคียง แล้วเทียบกับกลุ่มที่เข้มที่สุดในพื้นที่และระดับซูมปัจจุบัน (แดง = เข้มที่สุดในมุมมอง ไม่ใช่ 100 มม.) จึงเปลี่ยนได้เมื่อเลื่อนหรือซูมแผนที่", "Color shows the combined subsidence intensity of nearby stations relative to the strongest cluster in the current area and zoom level (red = strongest in view, not 100 mm). It changes when you pan or zoom."],
        ["รัศมีแสดงผล radius 20 px และ blur 15 px เป็นขนาดบนหน้าจอ ไม่ใช่ระยะทางจริงเป็นเมตรหรือกิโลเมตร", "The display radius (20 px) and blur (15 px) are screen sizes, not real-world distances in meters or kilometers."],
        ["หมุดสีแดง แต่รังสีเป็นสีฟ้า/เขียว หมายความว่าอย่างไร?", "Why can a red marker appear over a blue/green heatmap?"],
        ["หมายถึง สถานีนั้นทรุดตัวจนถึงเกณฑ์อันตรายแล้ว (>100 มม.) แต่ยังไม่ใช่จุดที่ลึกที่สุด และมักเป็นจุดที่ตั้งอยู่โดดเดี่ยว (Local Risk) ไม่ได้ดึงรั้งพื้นที่รอบๆ ให้ทรุดตามเป็นผืนใหญ่เหมือนโซนชานเมืองฝั่งตะวันออก", "The station has crossed the >100 mm risk threshold, but is not the most intense point and may be isolated (local risk), unlike a broad hotspot where nearby stations also show strong subsidence."],
        ["5. ความหมายของ Anomaly Tags (Best vs Worst):", "5. Anomaly tags (Best vs Worst):"],
        ["สถานีที่ทายแม่นยำที่สุด สะท้อนว่าตัวแปรที่ใช้ (น้ำบาดาล, ชั้นดิน) อธิบายพฤติกรรมพื้นที่นั้นได้ครบถ้วนในบริบทของการวิจัยครั้งนี้", "The station with the smallest prediction error; groundwater and soil variables explain its behavior well in this study."],
        ["สถานีที่ทายคลาดเคลื่อน ชี้ให้เห็นถึงอิทธิพลของ Omitted Variable ที่อยู่นอกเหนือสมการ", "A station with a large prediction error, potentially indicating omitted factors outside the model."],
        ["ทำไม Best/Worst ของ RF และ XGB ถึงเป็นคนละสถานีกัน?:", "Why do RF and XGBoost have different best- and worst-performing stations?"],
        ["หาค่าเฉลี่ยจากต้นไม้หลายต้น จึงทนทานต่อข้อมูลกวน (Noise) แต่", "averages many trees and is more robust to noise, while"],
        ["เน้นสร้างต้นไม้แก้จุดที่ผิดพลาดในรอบก่อนหน้า จึงไวต่อรายละเอียดเชิงลึกแต่อาจ Overfit กับบางพื้นที่ การตอบสนองต่อภูมิประเทศและจุด Anomaly ของทั้งสองโมเดลจึงต่างกัน", "focuses on correcting earlier errors, so it can capture detail but may overfit some locations. The models therefore respond differently to local terrain and anomalies."],
        ["6. เอกสารอ้างอิงสำคัญ (Key References):", "6. Key references:"],
        ["5. เอกสารอ้างอิงสำคัญ (Key References):", "5. Key references:"],
        ["6. ความหมายของ Anomaly Tags (Best vs Worst):", "6. Anomaly tags (Best vs Worst):"],
        ["System Information & Disclaimer:", "ข้อมูลระบบและข้อสงวนสิทธิ์:"],
        ["ⓘ System Information & Disclaimer", "ⓘ ข้อมูลระบบและข้อสงวนสิทธิ์"],
        ["CV MAE:", "MAE เฉลี่ย CV:"],
        ["Abs. error:", "ค่าคลาดเคลื่อนสัมบูรณ์:"],
        ["Data Frame:", "ช่วงข้อมูล:"],
        ["Publish Date:", "วันที่เผยแพร่:"],
        ["Warning:", "คำเตือน:"],
        ["Disclaimer", "ข้อสงวนสิทธิ์"],
        ["Labels", "ป้ายชื่อสถานี"],
        ["Station:", "สถานี:"],
        ["District:", "เขต:"],
        ["Lat:", "ละติจูด:"],
        ["Lon:", "ลองจิจูด:"],
        ["InSAR Subsidence:", "การทรุดตัวจาก InSAR:"],
        ["SHAP Value (%):", "ค่า SHAP (%):"],
        ["Actual Subsidence", "ค่าการทรุดตัวจริง"],
        ["Physical Data", "ข้อมูลกายภาพ"],
        ["Clay Thickness", "ความหนาชั้นดินเหนียว"],
        ["Well Depth", "ความลึกบ่อบาดาล"],
        ["Model Performance (Group 5-fold CV mean) & Explanation (SHAP)", "ประสิทธิภาพแบบจำลอง (ค่าเฉลี่ย Group 5-fold CV) และคำอธิบาย (SHAP)"],
        ["Best Fit", "ทำนายใกล้เคียง"],
        ["Worst Anomaly", "คลาดเคลื่อนสูง"],
        ["Sub-factors", "ปัจจัยย่อย"],
        ["Factor", "ปัจจัย"],
        ["Absolute Cumulative Subsidence", "การทรุดตัวสะสมสัมบูรณ์"],
        ["Thresholds:", "เกณฑ์:"],
        ["Bang Bon", "บางบอน"],
        ["Bang Kapi", "บางกะปิ"],
        ["Bang Khen", "บางเขน"],
        ["Bang Khun Thian", "บางขุนเทียน"],
        ["Bangkok Noi", "บางกอกน้อย"],
        ["Bueng Kum", "บึงกุ่ม"],
        ["Chatuchak", "จตุจักร"],
        ["Dusit", "ดุสิต"],
        ["Khlong Sam Wa", "คลองสามวา"],
        ["Lat Krabang", "ลาดกระบัง"],
        ["Lat Phrao", "ลาดพร้าว"],
        ["Min Buri", "มีนบุรี"],
        ["Nong Chok", "หนองจอก"],
        ["Phasi Charoen", "ภาษีเจริญ"],
        ["Prawet", "ประเวศ"],
        ["Sai Mai", "สายไหม"],
        ["Thawi Watthana", "ทวีวัฒนา"],
        ["Thung Khru", "ทุ่งครุ"],
        ["Wang Thonglang", "วังทองหลาง"],
        ["Watthana", "วัฒนา"],
        ["Yan Nawa", "ยานนาวา"],
        ["แผนที่นี้เป็นส่วนหนึ่งของรายงานการศึกษา เรื่อง การวิเคราะห์แนวโน้มการทรุดตัวของแผ่นดินในกรุงเทพมหานครด้วยวิธี InSAR ร่วมกับข้อมูลการใช้น้ำบาดาล", "This map is part of a study analyzing land-subsidence trends in Bangkok using InSAR and groundwater-use data."],
        ["ซึ่งเป็นปริญญานิพนธ์ส่วนหนึ่งของการศึกษาตามหลักสูตรปริญญาวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมโยธา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ปีการศึกษา 2568", "This work contributes to the Bachelor of Engineering degree in Civil Engineering, Faculty of Engineering, King Mongkut's University of Technology Thonburi, academic year 2025."],
        ["ผู้เขียน:", "Authors:"],
        ["อาจารย์ที่ปรึกษา:", "Advisor:"],
        ["ข้อสงวนสิทธิ์ (Disclaimer):", "Disclaimer:"],
        ["ข้อมูลที่ปรากฏในแผนที่นี้เป็นผลลัพธ์จากการประมวลผลในรายงานการศึกษาเชิงวิชาการ โดยใช้ข้อมูลจากดาวเทียม InSAR ร่วมกับแบบจำลอง Machine Learning ซึ่งอาจมีความคลาดเคลื่อนตามสภาวะแวดล้อมและข้อจำกัดทางเทคนิค ข้อมูล InSAR เป็นการวัดค่าที่ผิวดินระดับพิกเซล (100x100 ม.) และแบบจำลองเป็นการทำนายแนวโน้มจากตัวแปรน้ำบาดาลและชั้นดินเพียงบางส่วน ผลลัพธ์นี้มีวัตถุประสงค์เพื่อใช้ในการเฝ้าระวังและวิเคราะห์แนวโน้มในภาพรวมเท่านั้น การนำข้อมูลไปอ้างอิงเพื่อการตัดสินใจหรือการออกแบบทางวิศวกรรมในระดับรายอาคาร ควรอยู่ภายใต้วิจารณญาณของผู้ใช้งานและควรผ่านการตรวจสอบภาคสนาม (In-situ Testing) ตามหลักวิศวกรรมปฐพีกลศาสตร์ คณะผู้จัดทำไม่ขอรับผิดชอบต่อความเสียหายใดๆ ที่อาจเกิดขึ้นจากการนำข้อมูลไปใช้งานต่อในทุกกรณี", "This map presents academic results derived from InSAR satellite data and machine-learning models, which may contain errors due to environmental conditions and technical limitations. InSAR measures surface displacement at a 100 × 100 m pixel scale, while the model estimates trends from a limited set of groundwater and soil variables. Results are intended for general monitoring and trend analysis only. Building-level decisions or engineering design require professional judgment and field verification (in-situ testing) under geotechnical engineering principles. The authors accept no responsibility for losses arising from further use of these results."],
        ["ข้อมูลนี้เป็นส่วนหนึ่งของรายงานการศึกษาเพื่อวิเคราะห์แนวโน้มเชิงพื้นที่เท่านั้น การนำไปใช้งานควรใช้วิจารณญาณประกอบกับข้อมูลการเจาะสำรวจดินจริง คณะผู้วิจัยจะไม่รับผิดชอบต่อผลลัพธ์ใดๆ ที่เกิดจากการนำข้อมูลนี้ไปใช้โดยตรง", "These data are part of an academic study for spatial trend analysis only. Use professional judgment and actual soil-boring data; the researchers accept no responsibility for outcomes resulting from direct use."],
        ["ห้ามนำไปใช้ออกแบบอาคารรายหลังโดยไม่มีการเจาะสำรวจดินตามหลักวิศวกรรม", "Do not use these results to design individual buildings without geotechnical soil investigation."],
        ["ห้ามใช้ออกแบบโครงสร้างโดยไม่มีการเจาะสำรวจดิน", "Do not use these results for structural design without soil investigation."]
    ];

    function translateNode(node, language) {
        if (!node.__mapLanguageSource) node.__mapLanguageSource = node.nodeValue;
        var value = node.__mapLanguageSource;
        if (language === "th") {
            value = value
                .replace("🎓 แผนที่แนวโน้มการทรุดตัว (Subsidence Hotspot Map)", "🎓 แผนที่แนวโน้มการทรุดตัว")
                .replace(/\(เฝ้าระวัง \(Watch\)\)/g, "(เฝ้าระวัง)")
                .replace(/\(เตือนภัยวิกฤต \(Warning\)\)/g, "(วิกฤต)")
                .replace(/\(วิกฤต \(Critical\)\)/g, "(วิกฤต)")
                .replace(/\(ปกติ \(Stable\)\)/g, "(ปกติ)");
        } else {
            value = value
                .replace("🎓 แผนที่แนวโน้มการทรุดตัว (Subsidence Hotspot Map)", "🎓 Subsidence Hotspot Map")
                .replace(/\(เฝ้าระวัง \(Watch\)\)/g, "(Watch)")
                .replace(/\(เตือนภัยวิกฤต \(Warning\)\)/g, "(Critical)")
                .replace(/\(วิกฤต \(Critical\)\)/g, "(Critical)")
                .replace(/\(ปกติ \(Stable\)\)/g, "(Stable)");
        }
        translations.forEach(function (pair) {
            var firstIsThai = /[\u0e00-\u0e7f]/.test(pair[0]);
            var thai = firstIsThai ? pair[0] : pair[1];
            var english = firstIsThai ? pair[1] : pair[0];
            value = language === "th"
                ? value.split(english).join(thai)
                : value.split(thai).join(english);
        });
        node.nodeValue = value;
    }

    window.setMapLanguage = function (language) {
        if (language !== "th" && language !== "en") return;
        document.documentElement.lang = language;
        document.title = language === "th" ? "แผนที่แนวโน้มการทรุดตัวในกรุงเทพฯ" : "Bangkok Subsidence Hotspot Map";
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && !/^(SCRIPT|STYLE)$/.test(node.parentElement.tagName)) {
                translateNode(node, language);
            }
        }
        document.querySelectorAll(".language-switch button").forEach(function (button) {
            var active = button.textContent.trim().toLowerCase() === language;
            button.setAttribute("aria-pressed", active ? "true" : "false");
        });
        var switcher = document.querySelector(".language-switch");
        if (switcher) switcher.setAttribute("aria-label", language === "th" ? "เปลี่ยนภาษา" : "Change language");
        var legend = document.querySelector(".heatmap-legend");
        if (legend) legend.setAttribute("aria-label", language === "th" ? "คำอธิบาย HeatMap" : "Heatmap legend");
        var gradient = document.querySelector(".heatmap-gradient");
        if (gradient) gradient.setAttribute("aria-label", language === "th"
            ? "ไล่สีจากน้ำเงินซึ่งมีความเข้มต่ำ ไปแดงซึ่งมีความเข้มสูงสุด"
            : "Color scale from lower intensity (blue) to highest intensity (red)");
    };

    var mapKey = Object.keys(window).filter(function (key) {
        return /^map_/.test(key) && window.L && window[key] instanceof L.Map;
    })[0];
    var mapInstance = mapKey ? window[mapKey] : null;
    if (mapInstance) mapInstance.on("popupopen", function () {
        window.setMapLanguage(document.documentElement.lang || "th");
    });
    window.setMapLanguage("th");
}());
