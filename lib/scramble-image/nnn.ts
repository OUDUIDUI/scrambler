/**
 * 获取正阶打乱图
 * @param n {number} 阶数
 * @param scrambler {string} 打乱
 * */
export default class NxNImages {
    uImg: Array<number> = [];
    dImg: Array<number> = [];
    lImg: Array<number> = [];
    rImg: Array<number> = [];
    fImg: Array<number> = [];
    bImg: Array<number> = [];

    n: number;
    n2: number;
    scrambleStr: string

    constructor(
        n: 2 | 3 | 4 | 5 | 6 | 7,
        scramble: string
    ) {
        this.n = n;
        this.scrambleStr = scramble;
        this.n2 = Math.pow(n, 2);

        // 初始化
        this.init();
    }

    /**
     * 初始六个面的数组
     * U -> 0; D -> 1; L -> 2; R -> 3; F -> 4; B -> 5
     * */
    init(): void {
        const keys = ['uImg', 'dImg', 'lImg', 'rImg', 'fImg', 'bImg'];
        for (let i: number = 0; i < this.n2; i++) {
            for (let j: number = 0; j < keys.length; j++) {
                this[keys[j]].push(j)
            }
        }
        this.uImg = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    /**
     * 获取打乱图
     * */
    getImage() {
        // 打乱
        this.scramble()

        return 1;
    }

    /**
     * 生成打乱图
     * */
    scramble(): void {
        const scrambleArr: Array<string> = this.scrambleStr
            .split(' ')
            .filter(i => i);

        scrambleArr.forEach((step: string) => {
            this.handleStep(step)
        })
    }

    /**
     * 识别公式
     * @param step {string}
     * */
    handleStep(step: string) {
        if (step.includes('R') || step.includes('r')) {
            // 处理R面
            this.handleR(step);
        } else if (step.includes('L') || step.includes('l')) {
            // 处理L面
            this.handleL(step);
        } else if (step.includes('F') || step.includes('f')) {
            // 处理F面
            this.handleF(step);
        } else if (step.includes('B') || step.includes('b')) {
            // 处理B面
            this.handleB(step);
        } else if (step.includes('U') || step.includes('u')) {
            // 处理U面
            this.handleU(step);
        } else if (step.includes('D') || step.includes('d')) {
            // 处理D面
            this.handleD(step);
        }
    }

    /**
     * 处理R面
     * @param step {string}
     * */
    handleR(step: string) {
        switch (step) {
            case 'R':
                break;
            case "R'":
                break;
            case "R2":
                break;
        }
    }

    /**
     * 处理L面
     * @param step {string}
     * */
    handleL(step: string) {
        switch (step) {
            case 'L':
                break;
            case "L'":
                break;
            case "L2":
                break;
        }
    }

    /**
     * 处理F面
     * @param step {string}
     * */
    handleF(step: string) {
        switch (step) {
            case 'F':
                break;
            case "F'":
                break;
            case "F2":
                break;
        }
    }

    /**
     * 处理B面
     * @param step {string}
     * */
    handleB(step: string) {
        switch (step) {
            case 'B':
                break;
            case "B'":
                break;
            case "B2":
                break;
        }
    }

    /**
     * 处理U面
     * @param step {string}
     * */
    handleU(step: string) {
        console.log(step);
        switch (step) {
            case 'U':
                this.positiveRotate(this.uImg);
                break;
            case "U'":
                this.oppositeRotate(this.uImg);
                break;
            case "U2":
                break;
        }
        console.log(this.uImg);
    }

    /**
     * 处理D面
     * @param step {string}
     * */
    handleD(step: string) {
        switch (step) {
            case 'D':
                break;
            case "D'":
                break;
            case "D2":
                break;
        }
    }

    /**
     * 生成打乱图
     *
     *          0 1 2
     *          3 U 5
     *          6 7 8
     *
     *  0 1 2   0 1 2   0 1 2   0 1 2
     *  3 L 5   3 F 5   3 R 5   3 B 5
     *  6 7 8   6 7 8   6 7 8   6 7 8
     *
     *          0 1 2
     *          3 D 5
     *          6 7 8
     *
     * */

    /**
     * 顺时针方向
     * */
    positiveRotate(mainArr) {
        // 正面处理
        // 0=3;3=6;6=7;7=8;8=5;5=2;2=1;1=0
        // 3 0 1 6 4 2 7 8 5
        const cpMainArr = [...mainArr];
        for (let i: number = 0; i < this.n - 1; i++) {
            // 2=1;1=0
            mainArr[i + 1] = cpMainArr[i]
            // 0=3;3=6
            mainArr[i * this.n] = cpMainArr[(i + 1) * this.n];
            // 8=5;5=2
            mainArr[(i + 2) * this.n - 1] = cpMainArr[(i + 1) * this.n - 1]
            // 6=7;7=8
            mainArr[this.n2 - this.n + i] = cpMainArr[this.n2 - this.n + i + 1];


        }
    }

    /**
     * 逆时针方向
     * */
    oppositeRotate(mainArr) {
        // 正面处理
        // 0=1;1=2;2=5;5=8;8=7;7=6;6=3;3=0
        // 1 2 5 0 4 8 3 6 7
        const cpMainArr = [...mainArr];
        for (let i: number = 0; i < this.n - 1; i++) {
            // 0=1;1=2
            mainArr[i] = cpMainArr[i + 1];
            // 3=0;6=3
            mainArr[(i + 1) * this.n] = cpMainArr[i * this.n]
            // 2=5;5=8
            mainArr[(i + 1) * this.n - 1] = cpMainArr[(i + 2) * this.n - 1];
            // 7=6;8=7
            mainArr[this.n2 - this.n + i + 1] = cpMainArr[this.n2 - this.n + i]
        }
    }

    doubleRotate() {

    }
}
