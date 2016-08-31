/**
 * Created by hxsd on 2016/8/6.
 */
angular.module("myapp").controller("aboutCtrl",function($scope,$http,$ionicScrollDelegate){
    $scope.products = [
        {title:"Caption Title One",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/001.jpg"},
        {title:"Caption Title Two",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/002.jpg"},
        {title:"Caption Title Three",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/003.jpg"},
        {title:"Caption Title Four",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/004.jpg"},
        {title:"Caption Title Five",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/005.jpg"},
        {title:"Caption Title Six",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/006.jpg"},
        {title:"Caption Title Seven",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/007.jpg"},
        {title:"Caption Title Eight",desc:"A gallery that makes your images look just awesome on any mobile!",imgsrc:"images/swype/thumb/008.jpg"}
    ];

    // 下拉刷新
    $scope.refresh = function(){
        // 向服务器端请求新的数据，替换掉现有的数据
        $http.get("views/about/data.json").success(function(data){
            $scope.products = data;
        }).finally(function(){
            // 通知框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    // 无限滚动
    $scope.loadMore = function(){
        // 向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("views/about/data.json").success(function(data){
            // 使用Array的原型方法push; 等价于  $scope.products.push(data)
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            // 通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toTop = function(){
        // 将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});