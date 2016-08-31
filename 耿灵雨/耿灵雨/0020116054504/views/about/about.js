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

    // ����ˢ��
    $scope.refresh = function(){
        // ��������������µ����ݣ��滻�����е�����
        $http.get("views/about/data.json").success(function(data){
            $scope.products = data;
        }).finally(function(){
            // ֪ͨ��ܣ�ˢ�½�����ֹͣ��ʾͼ��
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    // ���޹���
    $scope.loadMore = function(){
        // �������������һҳ�µ����ݣ�׷�ӵ���������֮��
        $http.get("views/about/data.json").success(function(data){
            // ʹ��Array��ԭ�ͷ���push; �ȼ���  $scope.products.push(data)
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            // ֪ͨ��ܣ����ؽ�����ֹͣ��ʾͼ��
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toTop = function(){
        // �����ڹ���������
        $ionicScrollDelegate.scrollTop(true);
    };
});