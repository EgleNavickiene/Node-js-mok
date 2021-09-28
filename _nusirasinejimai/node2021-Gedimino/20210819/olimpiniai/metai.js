const arOlimpiniai=(metai)=>{
   if (metai % 4==0 && metai>=1896)
        return true;
   else return false;
};

const olimpinisNumeris=(metai)=>{
   return (metai - 1896) / 4 +1;
}

module.exports={arOlimpiniai, olimpinisNumeris};

