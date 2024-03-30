import {Server} from 'http';
import "reflect-metadata";
import logger from "@utils/logger"
import {app} from "@app"

const PORT = process.env.API_PORT || 3000

async function initServer() {
    try {
        //start db
        app.listen(PORT, (): void => {
            logger.info(`Connected successfully on port ${PORT}`);
        });
    } catch (error) {
        logger.error(`Error occurred while starting server: ${JSON.stringify(error)}`);
    }
}


// Initialization
initServer()

// export for testing
export {app}

