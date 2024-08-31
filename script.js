const themeConfig = {
  'prism-tomorrow': 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
  'prism-base16-ateliersulphurpool': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-base16-ateliersulphurpool.light.min.css',
  'prism-okaidia': 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css'
};

const fontSizeConfig = {
  'small': '12px',
  'medium': '14px',
  'large': '18px'
};

// デバッグ用：サンプルコードの挿入
codeInput.value = `@startuml
title ソフトウェア開発プロセス

start
:要件分析;
:設計;
fork
  :フロントエンド開発;
fork again
  :バックエンド開発;
end fork
:統合テスト;
if (バグ発見?) then (はい)
  :デバッグ;
  :再テスト;
else (いいえ)
endif
:デプロイ;
stop

@enduml

@startuml
title オンラインショッピングシステム

class User {
  -id: int
  -name: String
  -email: String
  +register()
  +login()
}

class Product {
  -id: int
  -name: String
  -price: double
  +addToCart()
}

class Cart {
  -items: List<Product>
  +addItem()
  +removeItem()
  +checkout()
}

class Order {
  -id: int
  -user: User
  -items: List<Product>
  -totalAmount: double
  +processPayment()
}

User "1" -- "0..*" Order
User "1" -- "1" Cart
Cart "1" -- "0..*" Product
Order "1" -- "1..*" Product

@enduml

@startuml
!define TABLE(name,desc) class name as "desc" << (T,#FFAAAA) >>
!define PK(x) <u>x</u>
!define FK(x) #x

title データベース設計: ブログシステム

TABLE(users, "ユーザー") {
  PK(id): INT
  username: VARCHAR(50)
  email: VARCHAR(100)
  password: VARCHAR(255)
  created_at: TIMESTAMP
}

TABLE(posts, "投稿") {
  PK(id): INT
  FK(user_id): INT
  title: VARCHAR(200)
  content: TEXT
  published_at: TIMESTAMP
}

TABLE(comments, "コメント") {
  PK(id): INT
  FK(post_id): INT
  FK(user_id): INT
  content: TEXT
  created_at: TIMESTAMP
}

TABLE(categories, "カテゴリ") {
  PK(id): INT
  name: VARCHAR(50)
}

TABLE(post_categories, "投稿カテゴリ") {
  PK(id): INT
  FK(post_id): INT
  FK(category_id): INT
}

users ||--o{ posts
users ||--o{ comments
posts ||--o{ comments
posts }|--|| post_categories
categories ||--|| post_categories

@enduml

@startsalt
{
  Just plain text
  [This is my button]
  ()  Unchecked radio
  (X) Checked radio
  []  Unchecked box
  [X] Checked box
  "Enter text here   "
  ^This is a droplist^
}

{
  {T
   + World
   ++ America
   +++ Canada
   +++ USA
   ++++ New York
   ++++ Boston
   +++ Mexico
   ++ Europe
   +++ Italy
   +++ Germany
   ++++ Berlin
   ++ Africa
  }
  {
    Login    | "MyName   "
    Password | "****     "
    [Cancel] | [  OK   ]
  }
}
@endsalt


@startuml
skinparam handwritten true
skinparam monochrome true
skinparam packageStyle rectangle
skinparam shadowing false

title 複雑なECサイトの注文フローと画面遷移

state "トップページ" as Top
state "商品一覧" as ProductList
state "商品詳細" as ProductDetail
state "カート" as Cart
state "ログイン" as Login
state "会員登録" as Register
state "配送情報入力" as Shipping
state "支払い方法選択" as Payment
state "注文確認" as Confirm
state "注文完了" as Complete

[*] --> Top
Top --> ProductList : 商品を探す
ProductList --> ProductDetail : 商品を選択
ProductDetail --> Cart : カートに追加
Cart --> Login : レジに進む
Login --> Register : 新規会員登録
Register --> Shipping : 登録完了
Login --> Shipping : ログイン成功
Shipping --> Payment : 次へ
Payment --> Confirm : 次へ
Confirm --> Complete : 注文確定

state Cart {
  [*] --> Empty
  Empty --> HasItems : 商品追加
  HasItems --> Empty : 全商品削除
  HasItems --> HasItems : 数量変更
}

state Shipping {
  [*] --> AddressInput
  AddressInput --> AddressConfirm : 入力完了
  AddressConfirm --> AddressInput : 修正
}

state Payment {
  [*] --> MethodSelect
  MethodSelect --> CreditCard : クレジットカード選択
  MethodSelect --> BankTransfer : 銀行振込選択
  CreditCard --> CardInput : カード情報入力
  CardInput --> CardConfirm : 入力完了
  CardConfirm --> CardInput : 修正
}

@enduml


@startuml

skinparam state {
  BackgroundColor LightBlue
  BorderColor Blue
  FontName 游ゴシック
}

[*] --> トップページ

state トップページ {
  [*] --> 商品一覧
  商品一覧 --> 商品詳細 : 商品選択
}

トップページ --> ログイン : ログインボタン
ログイン --> マイページ : ログイン成功
ログイン --> 会員登録 : 新規登録

state マイページ {
  [*] --> プロフィール
  プロフィール --> 注文履歴
  注文履歴 --> プロフィール
}

トップページ --> カート : カートボタン
カート --> 注文確認 : 注文へ進む
注文確認 --> 注文完了 : 注文確定

@enduml`;