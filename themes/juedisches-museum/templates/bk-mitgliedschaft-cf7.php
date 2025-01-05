<div class="form-rows">
   <!-- col -->
   <div class="common-cont-wrap cont-input-wrap cont-form">  
       <div class="cont-radio-wrap">
         <div class="lab-inp-wrap">
            [radio gender use_label_element default:1 "Frau" "Herr"]
         </div>
      </div>

      <div class="lab-inp-wrap">
         <label>Name*</label>[text* last-name] 
      </div>

      <div class="lab-inp-wrap">
         <label>Vorname*</label>[text* first-name]
      </div>

      <div class="lab-inp-wrap">
         <label>Adresse*</label>[text* adresse]
      </div>

      <div class="lab-inp-wrap">
         <label>PLZ Ort*</label>[text* zip-code]
      </div>

      <div class="lab-inp-wrap">
         <label>Land*</label>[text* country]
      </div>

      <div class="lab-inp-wrap">
         <label>Mail*</label>[email* email]
      </div>

      <div class="lab-inp-wrap">
         <label>Telefon</label>[tel tel]
      </div>
   </div>
   <!-- col -->
   <div class="common-cont-wrap cont-radio-wrap news-letter"> 
      <div class="lab-inp-wrap">
      [checkbox NewsletterAbonnieren use_label_element "Newsletter abonnieren"]
      </div>
      <div class="lab-inp-wrap">
      <p>Wie möchten Sie über unser aktuelles Programm informiert werden?*</p>
      [radio sub-type use_label_element default:1 "per Email" "per Post"]
      </div>
      <div class="sub-wrap">
      [submit "Formular senden"]
      </div>
   </div>
   <!-- col -->
   <div class="common-cont-wrap cont-radio-wrap pricing">
      <div class="lab-inp-wrap has-radio">
         <div class="wrap-half">
         [radio group-type use_label_element default:1 "Einzel" "Kollektiv–/ Familie" "Unternehmen" "Gönner:in" "auf Lebenszeit"]
         </div>
         <div class="wrap-half">
               <ul>
                  <li>Fr. 40.–</li>
                  <li>Fr. 70.–</li>
                  <li>Fr. 500.–</li>
                  <li>Fr. 2000.–</li>
                  <li>15-facher Beitrag</li>
               </ul>
         </div>
      </div>
   </div>
</div>