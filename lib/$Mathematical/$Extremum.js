'use strict';
/************************************************/
((_) => {
  globalThis.$Zeyo = globalThis.$Zeyo || {};
  globalThis.$Zeyo.$Mathematical = globalThis.$Zeyo.$Mathematical || {};
  globalThis.$Zeyo.$Mathematical.$Extremum = class $
  {
    static $Maximum(...args)
    {
      if (args.length < 0)
      {
        return;
      }
      /************************************************/
      let retValue = undefined;
      /************************************************/
      args
      .forEach((current, index, args) => {
        if (typeof(current) == 'number')
        {
          if (!retValue || retValue < current)
          {
            retValue = current;
          }
        }
        if (Array.isArray(current))
        {
          
        }
      });
      /************************************************/
      return retValue;
    }

    static $Minimum(...args)
    {
      
    }
  }
})({
  space       : '$Zeyo.$Mathematical',
  name        : '$Extremum',
  description : '',
  version     : '',
  import      : [],
  export      : '',
});
/************************************************/
export default globalThis.$Zeyo.$Mathematical.$Extremum;