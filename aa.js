function oddFriend(names) {
    for (var i = 0; i < names.length; i++) {

        var friend = names[i];
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}
var newArray = oddFriend(["Ab", "dfe", "XYZ", "cd"]);
console.log(newArray);

