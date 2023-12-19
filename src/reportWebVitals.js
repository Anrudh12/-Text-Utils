

const domPreParse = new JSDOM(incident);
<div class="sco" data-type="middle">
    <div class="clear">
        <span class="inc" data-type="home-icon"></span>
        <span class="score" data-type="score">&nbsp;</span>
        <span class="inc" data-type="away-icon">
            <svg class="inc yellowcard"><use xlink:href="#icon-yellowcard"></use></svg>
        </span>
    </div>
</div>
//the below is the report web vitals data
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
