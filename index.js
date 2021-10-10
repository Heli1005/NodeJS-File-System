const readLine = require('readline');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fileName = '';
var content = '';

const fs = require('fs');

var createDirectoryWizard = () => {
    r1.question("\nEnter the name for your directory: ", (directory) => {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
            console.log("\n", directory, " is created successfully!");
        } else {
            console.log("\n", directory, " already exists!");
        }
        repeat();
    })
};

var removeDirectoryWizard = () => {
    r1.question("\nEnter the name of the directory you want to remove: ", (directory) => {
        if (fs.existsSync(directory)) {
            fs.rmdirSync(directory);
            console.log("\n", directory, " removed successfully!");
        } else {
            console.log("\nDirectory doesn't exist!");
        }
        repeat();
    })
};

var createFileWizard = () => {
    r1.question("\nEnter the name of the file: ", (file) => {
        fileName = file + '.txt';
        r1.question("\nEnter the content: ", (cont) => {
            content = cont;
            fs.writeFile(fileName, content, (error) => {
                if (error) {
                    console.log( error);
                } else {
                    console.log("\nFile saved!!");
                }
                repeat();
            });
        });
    });
};

var readFileWizard = () => {
    r1.question("\nEnter the name of the file to read: ", (file) => {
        fileName = file + ".txt";
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                console.log("\nFile doesn't exists: ");
            } else {
                console.log("\nThe file opened is: ", fileName);
                console.log("\n", data);
            }
            repeat();
        });
    });
};

var deleteFileWizard = () => {
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

var appendFileWizard = () => {
    r1.question("\nEnter the name of the file: ",(file) => {
        fileName = file + ".txt";
        r1.question("\nEnter content: ",(cont) => {
            content = cont;
            fs.appendFile(fileName,content,(error) => {
                if(error){
                    console.log("\nFile not found");
                } else{
                    console.log("\nFile Appended!");
                }
                repeat();
            })
        })
    })
};

var updateFileWizard = () => {
    r1.question("\nEnter the name of the file: ",(file) => {
        fileName = file + ".txt";
        r1.question("\nEnter content: ",(cont) => {
            content = cont;
            fs.writeFile(fileName,content,(error) => {
                if(error){
                    console.log("\nFile not found");
                } else{
                    console.log("\nFile Appended!");
                }
                repeat();
            })
        })
    })
};

var renameFileWizard = () => {
    var replaceFileName= '';
    r1.question("\nEnter the name of the file to rename: ", (file) => {
        fileName = file + '.txt';
        r1.question("\nEnter the name of the file: ",(file1) => {
            replaceFileName = file1 + '.txt';
            fs.rename(fileName, replaceFileName, (error) => {
                if(error){
                    console.log("\nFile not found");
                }else{
                    console.log("\nFile Renamed!");
                }
                repeat();
            })
        })
    })
};

var fileMenu = () => {
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

var start = () => {
    r1.question("\nEnter choice: ", (answer) => {
        if (answer == "1") {
            createDirectoryWizard();
        } else if (answer == "2") {
            removeDirectoryWizard();
        } else if (answer == "3") {
            createFileWizard();
        } else if (answer == "4") {
            readFileWizard();
        } else if (answer == "5") {
            deleteFileWizard();
        } else if (answer == "6") {
            appendFileWizard();
        } else if (answer == "7") {
            updateFileWizard();
        } else if (answer == "8") {
            renameFileWizard();
        } else if (answer == "9") {
            r1.close();
        } else {
            console.log("\nPlease choose from the given option below:");
            fileMenu();
        }
    })
}

var repeat = () => {
    fileMenu();
    start();
}

console.log("Welcome to the file handling in Node.js");
console.log("\n----------Selection Menu----------");
repeat();