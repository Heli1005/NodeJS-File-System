const readLine = require('readline');
const fs = require('fs');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fileName = '';
var content = '';
var replaceFileName= '';

const createDirectoryWizard = () => {
    r1.question("\nEnter the name for your directory: ", (dir1) => {
        if (!fs.existsSync(dir1)) {
            fs.mkdirSync(dir1);
            console.log("\n", dir1, " is created successfully!");
        } else {
            console.log("\n", dir1, " already exists!");
        }
        repeat();
    })
};

const removeDirectoryWizard = () => {
    r1.question("\nEnter the name of the directory you want to remove: ", (dir1) => {
        if (fs.existsSync(dir1)) {
            fs.rmdirSync(dir1);
            console.log("\n", dir1, " removed successfully!");
        } else {
            console.log("\nDirectory doesn't exist!");
        }
        repeat();
    })
};

const createFileWizard = () => {
    r1.question("\nEnter the name of the file: ", (file) => {
        fileName = file + '.txt';
        r1.question("\nEnter the content: ", (cont) => {
            content = cont;
            fs.writeFile(fileName, content, (error) => {
                if (error) {
                    console.log("\nError: ", error);
                } else {
                    console.log("\nFile saved!!");
                }
                repeat();
            });
        });
    });
};

const readFileWizard = () => {
    r1.question("\nEnter the name of the file to read: ", (file) => {
        fileName = file + ".txt";
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                console.log("\nFile doesn't exists: ", error);
            } else {
                console.log("\nThe file opened is: ", fileName);
                console.log("\n", data);
            }
            repeat();
        });
    });
};

const deleteFileWizard = () => {
    r1.question("\nEnter the name of the file you want to delete: ",(file) => {
        fileName = file +".txt";
        fs.unlink(fileName, (error) => {
            if(error){
                console.log("\nFile doesn't exists!");
            }else{
                console.log("\nFile Deleted Successfully!");
            }
            repeat();
        });
    })
};

const appendFileWizard = () => {
    r1.question("\nEnter the name of the file: ",(file) => {
        fileName = file + ".txt";
        r1.question("\nEnter content: ",(cont) => {
            content = cont;
            fs.appendFile(fileName,content,(error) => {
                if(error){
                    console.log("\nError: ", error);
                } else{
                    console.log("\nFile Appended!");
                }
                repeat();
            })
        })
    })
};

const updateFileWizard = () => {
    r1.question("\nEnter the name of the file: ",(file) => {
        fileName = file + ".txt";
        r1.question("\nEnter content: ",(cont) => {
            content = cont;
            fs.writeFile(fileName,content,(error) => {
                if(error){
                    console.log("\nError: ", error);
                } else{
                    console.log("\nFile Appended!");
                }
                repeat();
            })
        })
    })
};

const renameFileWizard = () => {
    r1.question("\nEnter the name of the file to rename: ", (file) => {
        fileName = file + '.txt';
        r1.question("\nEnter the name of the file: ",(file1) => {
            replaceFileName = file1 + '.txt';
            fs.rename(fileName, replaceFileName, (error) => {
                if(error){
                    console.log("\n",error);
                }else{
                    console.log("\nFile Renamed!");
                }
                repeat();
            })
        })
    })
};

const fileMenu = () => {
    console.log("\n1) Create Directory");
    console.log("2) Remove Directory");
    console.log("3) Create-Write File");
    console.log("4) Read File");
    console.log("5) Delete File");
    console.log("6) Append Data to the File");
    console.log("7) Update or Replace data to the File");
    console.log("8) Rename File");
    console.log("9) Exit");
};

const start = () => {
    r1.question("\nEnter your choice: ", (ans) => {
        if (ans == "1") {
            createDirectoryWizard();
        } else if (ans == "2") {
            removeDirectoryWizard();
        } else if (ans == "3") {
            createFileWizard();
        } else if (ans == "4") {
            readFileWizard();
        } else if (ans == "5") {
            deleteFileWizard();
        } else if (ans == "6") {
            appendFileWizard();
        } else if (ans == "7") {
            updateFileWizard();
        } else if (ans == "8") {
            renameFileWizard();
        } else if (ans == "9") {
            r1.close();
        } else {
            console.log("\nIncorrect Input! Please choose from the given option");
            fileMenu();
        }
    })
}

const repeat = () => {
    fileMenu();
    start();
}

console.log("Welcome to the file handling in Node.js");
console.log("\n----------Selection Menu----------");
repeat();