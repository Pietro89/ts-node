import {getAvailableHellos} from "../../../mocks/db/index";
import {shuffleArray} from "../../utils/arrays/index";

/**
 * A hello object
 */
type Hello = {
    name: string
    size: number
};

/**
 * Generate a hello
 * @param size the size of the hello
 * @returns the hello
 */
export function generateHello(size: number): Hello {

    let availableHellos = getAvailableHellos()
    availableHellos = shuffleArray(availableHellos)
    const hello = {
        name: availableHellos[0],
        size
    }
    return hello
}
