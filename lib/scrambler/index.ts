import min2phase from "../min2phase"
import scrambleImage from "../scramble-image"

// console.log(new scrambleImage.NxNImages(3, "L' D  F2 U  F2 U2 F2 D' R2 U' L2 R2 U  F' D  B2 U' L' B' R").getImage())
console.log(new scrambleImage.NxNImages(3, "U U'").getImage())

export default class Scrambler {

    get333Scramble():String {
        return new min2phase.Search()
            .solution(
                min2phase.randomCube(),
                21, 1e9, 50, 2)
    }
}