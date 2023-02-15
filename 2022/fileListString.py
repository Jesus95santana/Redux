from os import listdir
from os.path import isfile, join
from os import getcwd
cwd = getcwd()
# mypath = "/Users/jesussantana/Documents/Github/Javascript/2022/"
mypath = str(cwd)

onlyfiles = [
    f for f in listdir(mypath)
        if  not isfile(join(mypath, f))
    ]
updateString = ""
outdatedString = ""

for name in onlyfiles:
    updateString += (" (cd " + str(name) + " && npm update);")
    outdatedString += (" (cd " + str(name) + " && npm outdated);")

print("Current Directory is :" + mypath)
print("String to check for update")
print(outdatedString)
print("String for update");
print(updateString)