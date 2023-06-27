
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';


   
function Hompage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <title>My new created app!</title>
     
     
      <h1 className="text-5xl font-bold mb-20">Meme Generator</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          < ArrowTrendingDownIcon className="h-8 w-8" />
 
            
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Funny memes</p>
            <p className="infoText">Top rated memes</p>
            <p className="infoText">Most saved memes</p>

             
          </div>
          </div>

          <div>
   <div className="flex flex-col items-center justify-center mb-5">
   < ArrowTrendingUpIcon className="h-8 w-8" />
     
     <h2>Capabilities</h2>
   </div>
   <div className="space-y-2">
     <p className="infoText">Text memes</p>
     <p className="infoText">Image only memes</p>
     <p className="infoText">Popular on crypto Twitter memes</p>
      
   </div>
   </div>

   <div>
   <div className="flex flex-col items-center justify-center mb-5">
   < ExclamationTriangleIcon className="h-8 w-8" />
     
     <h2>Limitations</h2>
   </div>
    <div className="space-y-2">
     <p className="infoText">Considered distastful</p>
     <p className="infoText">No likes</p>
     <p className="infoText">Utterly trash</p>
      
      </div>
      </div>
     </div>
    </div>









); 
}

export default Hompage
