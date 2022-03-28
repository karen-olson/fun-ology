class PhonologicalProcessesController < ApplicationController
    # Should remove this
    # Why is it trying to run authorize twice when it hits the PhonologicalProcesses#index route?
    # Once for GET me, once for PhonProcess#index? 
    #       The first time, the sesssion data is available
    #       The second time, it's not available and the authorization fails. 
    # Took off auth for PhonProcess#index - should I put it back on? 
    # Why is GET me running when I make a fetch request in PhonProcesses?
    #       GET me lives in a useEffect hook inside App
    #       It should run when any page is refreshed... when else? 
    #       Is it doing the desired behavior right now? Or no?
    skip_before_action :authorize, only: :index

    def index
        phonological_processes = PhonologicalProcess.all
        render json: phonological_processes
    end
end
