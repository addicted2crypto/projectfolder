
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline';


   
 function Hompage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <title>My new created app!</title>
     
     
      <h1 className="text-5xl font-bold mb-20">Meme Generator</h1>
      <div>
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

      </div>
      </div>
      
    
  ) 
}

export default Hompage
